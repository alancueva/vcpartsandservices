import React, { ChangeEvent} from 'react';

// Tipos para las props de los componentes de input
interface InputFieldProps {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'tel';
    required?: boolean;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Componente para un campo de entrada de texto.
 */
const InputField: React.FC<InputFieldProps> = ({ label, name, type = 'text', required = false, value, onChange }) => (
    <div className="mb-4">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-600">*</span>}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange} // Cast temporal ya que InputFieldProps solo acepta HTMLInputElement
            required={required}
            className="w-full px-4 py-2 border border-gray-300  text-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 transition duration-150 shadow-sm placeholder-gray-400 text-sm"
            placeholder={`Introduce tu ${label.toLowerCase()}`}
        />
    </div>
);

export default InputField;