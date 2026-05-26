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

type PrimaryButtonProps = LinkVariantProps | ButtonVariantProps;

function getPrimaryButtonClassName(className?: string) {
  return `relative inline-flex min-h-[48px] items-center justify-center overflow-hidden rounded-md border border-blue-300/15 bg-[linear-gradient(180deg,rgba(44,90,156,0.98)_0%,rgba(25,52,92,0.98)_62%,rgba(13,27,48,0.98)_100%)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-100 shadow-[0_12px_24px_rgba(4,14,30,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-200 hover:brightness-110 ${className ?? ""}`;
}

function isLinkVariant(props: PrimaryButtonProps): props is LinkVariantProps {
  return "href" in props && typeof props.href === "string";
}

export default function PrimaryButton(props: PrimaryButtonProps) {
  const buttonContent = (
    <>
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/30" />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-black/45" />
      <span className="pointer-events-none absolute inset-[1px] rounded-[5px] border border-white/5" />
      <span className="relative z-10">{props.children}</span>
    </>
  );

  if (isLinkVariant(props)) {
    const { className, href, ...linkProps } = props;

    return (
      <Link
        className={getPrimaryButtonClassName(className)}
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
      className={getPrimaryButtonClassName(className)}
      type={buttonType}
      {...buttonProps}
    >
      {buttonContent}
    </button>
  );
}
