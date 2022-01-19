import React from 'react';

type HtmlAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export interface LinkBaseProps extends HtmlAnchorProps {
  /** Устанавливает атрибуты `rel="noopener noreferrer nofollow"` и `target="_blank"`. */
  external?: boolean;
}
