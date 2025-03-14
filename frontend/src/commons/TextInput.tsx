import { Input } from "antd";

interface TextInputProps {
    placeHolder: string;
    value: string;
    onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ placeHolder, value, onChange }) => {
    return (
        <Input
            className="h-[48px]"
            size="large"
            placeholder={placeHolder}
            value={value}
            onChange={(e) => onChange(e.target.value)} // Directly passing the value
        />
    );
};

export default TextInput;
