import { Button, BUTTON_SIZES, BUTTON_TYPE } from "components/button"


export const ButtonPage = () => {
    const handleOnClick = () => {
        // action to trigger
    };

    return (
        <div>
            <h1>Button Component</h1>
            <p>This page displays all the button variants.</p>
            <hr className="divider" />
            <div className="section">
                <h3>Buttons based on Types</h3>
                <div className="component-container">
                    <Button label="Text Button" type={BUTTON_TYPE.text} onClick={handleOnClick} />
                    <Button label="Contained Button" type={BUTTON_TYPE.contained} onClick={handleOnClick} />
                    <Button label="Outlined Button" type={BUTTON_TYPE.outlined} onClick={handleOnClick} />
                </div>
            </div>
            <div className="section">
                <h3>Buttons based on Size</h3>
                <div className="component-container">
                    <Button label="Small Button" size={BUTTON_SIZES.small} onClick={handleOnClick} />
                    <Button label="Medium Button" size={BUTTON_SIZES.medium} onClick={handleOnClick} />
                    <Button label="Large Button" size={BUTTON_SIZES.large} onClick={handleOnClick} />
                </div>
            </div>
            <div className="section">
                <h3>Disabled Button</h3>
                <div className="component-container">
                    <Button label="Button" size={BUTTON_SIZES.medium} isDisabled onClick={handleOnClick} />
                </div>
            </div>
        </div >
    )
}