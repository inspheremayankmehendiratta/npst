'use client';

import React from 'react';
import {
    Stack,
    InputLabel,
    FormHelperText,
    SxProps,
    Theme,
    TextField,
} from '@mui/material';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import { useFormikContext, useField } from 'formik';

interface CustomDatePickerProps {
    id: string;
    name?: string; // optional for non formik
    label?: string;
    value?: string | null;
    onChange?: (value: string) => void;
    onBlur?: () => void;

    required?: boolean;
    fullWidth?: boolean;
    height?: number;
    sx?: SxProps<Theme>;
    inputSx?: SxProps<Theme>;
    maxDate?: any;
    error?: string;
}

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
    id,
    name,
    label,
    value,
    onChange,
    onBlur,

    required = false,
    fullWidth = true,
    height = 45,
    sx,
    inputSx,
    maxDate,
}) => {

    // try to get formik
    let formik;
    try {
        formik = useFormikContext<any>();
    } catch {
        formik = null;
    }

    const isFormik = Boolean(formik && name);

    const [field, meta] = isFormik ? useField(name!) : [{}, {}] as any;

    const hasError = isFormik
        ? Boolean(meta.touched && meta.error)
        : false;

    const fieldValue = isFormik
        ? field.value
        : value;

    const maxSelectableDate = dayjs().endOf('year');

    const handleChange = (newValue: any) => {

        const dateValue =
            newValue && dayjs(newValue).isValid()
                ? dayjs(newValue).toISOString()
                : '';

        if (isFormik) {
            formik?.setFieldValue(name!, dateValue);
        } else {
            onChange?.(dateValue);
        }
    };

    const pickerValue =
        fieldValue && dayjs(fieldValue).isValid()
            ? dayjs(fieldValue)
            : null;

    return (
        <Stack sx={{ gap: 1, ...sx }}>
            {label && (
                <InputLabel htmlFor={id} error={hasError}>
                    {label} {required && '*'}
                </InputLabel>
            )}

            <DatePicker
                value={pickerValue}
                onChange={(newValue) => {

                    const dateValue =
                        newValue && dayjs(newValue).isValid()
                            ? dayjs(newValue).toISOString()
                            : '';

                    if (isFormik) {
                        formik?.setFieldValue(name!, dateValue);
                    } else {
                        onChange?.(dateValue);
                    }
                }}
                maxDate={maxDate || maxSelectableDate}
                slotProps={{
                    textField: {
                        id,
                        name,
                        fullWidth,
                        error: hasError,
                        onBlur: isFormik ? field?.onBlur : onBlur,
                        placeholder: `Select ${label?.toLowerCase()}`,
                        InputProps: {
                            sx: {
                                height,
                                ...inputSx,
                            },
                        },
                    },
                }}
            />
            {hasError && (
                <FormHelperText error>{meta.error}</FormHelperText>
            )}
        </Stack>
    );
};