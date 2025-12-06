import React, {ChangeEvent } from 'react';

interface TextAreaFieldProps {
    label: string;
    name: string;
    required?: boolean;
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * Componente para un área de texto (mensaje).
 */
const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, name, required = false, value, onChange }) => (
    <div className="mb-6">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-600">*</span>}
        </label>
        <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            rows={4}
            className="w-full px-4 py-2  text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 transition duration-150 shadow-sm placeholder-gray-400 text-sm resize-none"
            placeholder={`Escribe tu ${label.toLowerCase()} detallado...`}
        />
    </div>
);

export default TextAreaField;