"use client";
import { CustomInput } from '@/modules/shared/components/forms';
import { Button, Grid, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const LoginWrapper = () => {
    const initialValues = {
        mobile: '',
        password: '',
        rememberMe: false,
    }

    const handleSubmit = async (values: any) => {
        console.log(values);
    }
    return (
        <Grid sx={{ width: '100%', }}>
            <Grid container sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3
            }}>
                <Typography variant="h3">
                    Login
                </Typography>
            </Grid>
            <Formik
                initialValues={initialValues}
                //validationSchema={loginValidationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, isSubmitting, values, handleChange, handleBlur }) => (
                    <Grid container spacing={3}>
                        <Grid size={12}>
                            <CustomInput
                                id="mobile"
                                name="mobile"
                                label="Mobile Number"
                                type="text"
                                placeholder="Enter mobile address"
                                value={values.mobile}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                touched={touched.mobile}
                                error={errors.mobile}
                            />
                        </Grid>
                    </Grid>

                )}
            </Formik>
        </Grid>
    )
}

export default LoginWrapper;