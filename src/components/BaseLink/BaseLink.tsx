export type BaseLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function BaseLink({ children, ...rest }: BaseLinkProps): JSX.Element {
  return <a {...rest}>{children}</a>;
}
