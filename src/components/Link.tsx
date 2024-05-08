import { useMatches } from "../hooks/useMatches";

export function Link(props: any) {
  const { to, className, ...resOfProps } = props;
  const [root]: any = useMatches();
  const selectedLocale = root.data?.selectedLocale;

  let toWithLocale = to;

  if (typeof to === "string") {
    toWithLocale = selectedLocale ? `${selectedLocale.pathPrefix}${to}` : to;
  }

  if (typeof className === "function") {
    return <></>;
  }

  return <></>;
}
