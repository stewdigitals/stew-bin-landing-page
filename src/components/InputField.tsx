import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

export interface InputFieldProps {
    label: string;
    type?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    icon?: React.ComponentType<{ className?: string }>;
    placeholder?: string;
    required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    type = 'text',
    value,
    onChange,
    error,
    icon: Icon,
    placeholder,
    required = false,
}) => {

    return (
        <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
                {Icon && <Icon className="w-4 h-4 mr-2 text-gray-500" />}
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${error ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
            />
            {error && (
                <div className="flex items-center text-red-600 text-sm">
                    <FiAlertCircle className="w-4 h-4 mr-1" />
                    {error}
                </div>
            )}
        </div>
    );

}
export default InputField;