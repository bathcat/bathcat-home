
Get-ChildItem -Filter *.mdx -Recurse | ForEach-Object {
    $newName = (Split-Path $_.Directory -Leaf) + ".mdx"
    Rename-Item -Path $_.FullName -NewName $newName
}