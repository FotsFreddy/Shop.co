interface InputProps {
    inputType: string,
    inputPlaceholder: string,
    inputStyle:string
}
export default function Input({inputType, inputPlaceholder, inputStyle}:InputProps) {
    return (
        <input type={inputType} placeholder={inputPlaceholder} className={inputStyle} required/>
    );
}