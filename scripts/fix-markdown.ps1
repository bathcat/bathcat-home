param (
    # height of largest column without top bar
    [Parameter(Mandatory=$true)]
    [string]$path
)

$frontmatter_template = @'
---
title: "<NAME_OF_FILE>"
description: "<NAME_OF_FILE>"
status: 'Live'
flavor: 'Deck'
---
'@


# Does three thnigs:
# 1. Adds frontmatter to the top of the file. Sets the title and description to the name of the file.
# 2. Uses a regex to encase slide nodes in mdx comments.
#    For example, this:
#       "### Lorem ipsum
#
#        - Consectetur adipiscing elit. 
#        - Phasellus tincidunt
#
#        Note:
#        * Something something
#
#        ---"
#
#    Becomes this:
#       "### Lorem ipsum
#
#        - Consectetur adipiscing elit. 
#        - Phasellus tincidunt
#
#        {/* Note:
#            * Something something */}
#
#        ---"
#
# 3. Uses a regex to reformat <img> elements by moving the class and style into an encasing
#    <figure> element and replacing the <img> itselw with the markdown equivalent.
#
#    For example, this:
# 
#      "<img 
#        src='./assets/hans_unt_franz.png' 
#        class='nars-framed' 
#        style='width:40%;height:auto;'/>"
#
#    Becomes this:
#
#      "<figure class='nars-framed'  style='width:40%;height:auto;'>
#        ![Hans unt Franz](./assets/hans_unt_franz.png)
#       </figure>"
#
function Fixup-SlideDeck {
    param(
        [System.IO.FileInfo] $target
    )

    # `-Raw` reads the entire file as a single string, preserving newlines
    $content = Get-Content $target -Raw

    # TODO: Skip if there's already frontmatter in the file


    # Replace style
    $content = $content -replace 'nars-framed','bc-framed-image'

    ## Frontmatter
    $frontMatter = $frontmatter_template -replace "<NAME_OF_FILE>", $target.BaseName
    $content = $frontMatter + "`r`n" + $content

    # Remove any notes.
    $content = $content -replace '(?s)(Note[s]?:.*?)(?=\r?\n---)', ''

    # Reformat <img> elements by wrapping them in a <figure> and moving class/style attributes to the <figure>
$content = [regex]::Replace($content, '<img([^>]*)>', {
    param($m)
    $attrs = $m.Groups[1].Value

    $class = [regex]::Match($attrs, 'class\s*=\s*["'']([^"'']+)["'']').Groups[1].Value
    $style = [regex]::Match($attrs, 'style\s*=\s*["'']([^"'']+)["'']').Groups[1].Value
    $src = [regex]::Match($attrs, 'src\s*=\s*["'']([^"'']+)["'']').Groups[1].Value
    $altAttribute = [regex]::Match($attrs, 'alt\s*=\s*["'']([^"'']+)["'']').Groups[1].Value

    $alt = "Image sans description."
    if($altAttribute) {
        $alt = $altAttribute
    }

    $figureClass = ""
    if($class) {
        $figureClass = "class='$class'"
    }
    $figureStyle = ""
    if($style) {
        $figureStyle = "style='$style'"
    }

    $attrs = $attrs -replace 'class\s*=\s*(?:"[^"]+"|''[^'']+'')', ''
    $attrs = $attrs -replace 'style\s*=\s*(?:"[^"]+"|''[^'']+'')', ''

@"
<figure $figureClass $figureStyle>
![$alt]($src)
</figure>
"@
    
})

    # Insert a newline between the new content and the old content
    $content | Set-Content -Path $target
}



Fixup-SlideDeck (Get-Item -Path $path)

