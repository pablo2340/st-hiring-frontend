import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Button } from '@mui/material';
import { fetchSettings, updateSettings } from '../redux/actions';
import { RootState } from '../redux/store';
import { Settings } from '../types';

interface SettingsFormProps {
  clientId: number;
}

const SettingsForm: React.FC<SettingsFormProps> = ({ clientId }) => {
  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => state.settings);

  useEffect(() => {
    dispatch(fetchSettings(clientId));
  }, [dispatch, clientId]);

  return (
    <Formik
      initialValues={settings}
      enableReinitialize
      onSubmit={(values: Settings) => {
        dispatch(updateSettings({ clientId, settings: values }));
      }}
    >
      {() => (
        <Form>
          <Field name="deliveryMethods[0].selected" type="checkbox" />
          <Button type="submit" variant="contained">Save Settings</Button>
        </Form>
      )}
    </Formik>
  );
};

export default SettingsForm;
