import React, { useRef } from "react";
import { TooltipTriggerProps } from "@react-types/tooltip";
import { useTooltipTriggerState } from "@react-stately/tooltip";
import { useTooltipTrigger } from "@react-aria/tooltip";
import Tooltip from "./Tooltip";
import { SSRProvider } from "@react-aria/ssr";

interface CustomTooltipTriggerProps extends TooltipTriggerProps {
  children?: React.ReactNode;
}

export default function TooltipTrigger(props: CustomTooltipTriggerProps) {
  const state = useTooltipTriggerState(props);
  const ref = useRef<HTMLButtonElement>(null);

  const { triggerProps, tooltipProps } = useTooltipTrigger(props, state, ref);

  return (
    <SSRProvider>
      <span style={{ position: "relative" }}>
        <button ref={ref} {...triggerProps}>
          I have a tooltip
        </button>
        <Tooltip hidden={!state.isOpen} state={state} {...tooltipProps}>
          And the tooltip tells you more information.
        </Tooltip>
      </span>
    </SSRProvider>
  );
}
