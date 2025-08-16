'use client';

import { PropsWithChildren, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({ children }: PropsWithChildren) {
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => <>{sheet.getStyleElement()}</>);

  if (typeof window !== 'undefined') return <>{children}</>;

  const managerSheet = sheet.instance ?? sheet;

  return <StyleSheetManager sheet={managerSheet}>{children}</StyleSheetManager>;
}
