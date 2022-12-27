import Input from "./input";

export default function InputSet({ label, type, placeholder, name, id }) {
    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{label}</label>
            <Input type={type} placeholder={placeholder} name={name} id={id} />
        </div>
    )
}