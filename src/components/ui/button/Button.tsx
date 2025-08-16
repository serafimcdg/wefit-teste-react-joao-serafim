
import * as S from './Button.styles';
import type { ButtonProps } from './Button.interface';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth,
  loading,
  leftIcon,
  rightIcon,
  disabled,
  width,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const $width = typeof width === 'number' ? `${width}px` : width;


  return (
    <S.Base
      $variant={variant}
      $size={size}
      $full={!!fullWidth}
      disabled={isDisabled}
      $width={$width}

      {...rest}
    >
      {loading ? <S.InlineSpinner /> : leftIcon}
      <span>{children}</span>
      {!loading && rightIcon}
    </S.Base>
  );
}
