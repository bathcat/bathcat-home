interface LocationInfo {
  isCurrent: (s: string) => boolean;
}

export const useLocation = (doc: typeof document = document): LocationInfo => {
  const isCurrent = (s: string) => {
    const normalizedInfoPath = s.length > 1 ? s.replace(/\/+$/, '') : s;

    return doc.location.pathname === normalizedInfoPath;
  };

  return { isCurrent };
};
