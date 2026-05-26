import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

type LinkVariantProps = {
  children: ReactNode;
  className?: string;
  href: string;
} & Omit<ComponentPropsWithoutRef<"a">, "children" | "className" | "href">;

type ButtonVariantProps = {
  children: ReactNode;
  className?: string;
  href?: never;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type SecondaryButtonProps = LinkVariantProps | ButtonVariantProps;

function getSecondaryButtonClassName(className?: string) {
  return `relative inline-flex min-h-[48px] items-center justify-center overflow-hidden rounded-md border border-white/15 bg-[linear-gradient(180deg,rgba(45,52,61,0.96)_0%,rgba(24,29,35,0.98)_60%,rgba(12,15,19,0.98)_100%)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/85 shadow-[0_12px_24px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-200 hover:border-cyan-200/20 hover:brightness-110 ${className ?? ""}`;
}

function isLinkVariant(props: SecondaryButtonProps): props is LinkVariantProps {
  return "href" in props && typeof props.href === "string";
}

export default function SecondaryButton(props: SecondaryButtonProps) {
  const buttonContent = (
    <>
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/15" />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-black/50" />
      <span className="pointer-events-none absolute inset-[1px] rounded-[5px] border border-white/5" />
      <span className="relative z-10">{props.children}</span>
    </>
  );

  if (isLinkVariant(props)) {
    const { className, href, ...linkProps } = props;

    return (
      <Link
        className={getSecondaryButtonClassName(className)}
        href={href}
        {...linkProps}
      >
        {buttonContent}
      </Link>
    );
  }

  const { className, type, ...buttonProps } = props;
  const buttonType: ButtonHTMLAttributes<HTMLButtonElement>["type"] =
    type ?? "button";

  return (
    <button
      className={getSecondaryButtonClassName(className)}
      type={buttonType}
      {...buttonProps}
    >
      {buttonContent}
    </button>
  );
}
