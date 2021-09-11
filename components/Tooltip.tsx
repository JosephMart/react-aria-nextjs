import { TooltipTriggerState } from "@react-stately/tooltip";
import { useTooltip } from "@react-aria/tooltip";
import { AriaTooltipProps } from "@react-types/tooltip";

import { mergeProps } from "@react-aria/utils";

interface TooltipProps extends AriaTooltipProps {
  state: TooltipTriggerState;
  children: React.ReactNode;
}

export default function Tooltip({ state, children, ...props }: TooltipProps) {
  const { tooltipProps } = useTooltip(props, state);

  return (
    <span
      style={{
        position: "absolute",
        left: "5px",
        top: "100%",
        marginTop: "10px",
        backgroundColor: "white",
        color: "black",
        padding: "5px",
      }}
      {...mergeProps(props, tooltipProps)}
    >
      {children}
    </span>
  );
}
