interface SubmitButtonProps {
    buttonText: string,
    buttonStyle: string
}
export default function SubmitButton({buttonText, buttonStyle}: SubmitButtonProps) {
    return (
        <button type="submit" className={buttonStyle}>{buttonText}</button>
    );
}