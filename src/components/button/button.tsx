import { BUTTON_SIZES, BUTTON_TYPE } from "./constants"
import { FC } from "react"
import './button.css'

type Props = {
    /** Label for the button */
    label: string,
    /** Type of button? */
    type?: BUTTON_TYPE,
    /** Size of button? */
    size?: BUTTON_SIZES,
    /** Does the button disabled? */
    isDisabled?: boolean;
    /** Action to triger when clicked */
    onClick: () => void;
}

const composeClassName = (size: BUTTON_SIZES, type: BUTTON_TYPE, isDisabled?: boolean) => {
    let computedClass = 'button';

    if (size) {
        const buttonSizeClass = {
            [BUTTON_SIZES.large]: 'button__size--large',
            [BUTTON_SIZES.medium]: 'button__size--medium',
            [BUTTON_SIZES.small]: 'button__size--small',
        };
        computedClass = `${computedClass} ${buttonSizeClass[size]}`
    }


    if (type) {
        const buttonTypeClass = {
            [BUTTON_TYPE.text]: 'button--text',
            [BUTTON_TYPE.contained]: 'button--contained',
            [BUTTON_TYPE.outlined]: 'button--outlined',
        }

        computedClass = `${computedClass} ${buttonTypeClass[type]}`
    }

    if (isDisabled) {
        computedClass = `${computedClass} button__disabled`
    }

    return computedClass;
}

/** Button component to triggers a specific action when clicked. */
export const Button: FC<Props> = ({
    label,
    type = BUTTON_TYPE.contained,
    size = BUTTON_SIZES.medium,
    isDisabled,
    onClick
}) => {
    return (
        <button
            className={composeClassName(size, type, isDisabled)}
            disabled={isDisabled}
            onClick={onClick}
        >
            {label}
        </button>
    )
}