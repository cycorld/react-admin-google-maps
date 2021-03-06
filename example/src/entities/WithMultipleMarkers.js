import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  Create,
  EditButton,
  Show,
  SimpleShowLayout,
} from 'react-admin';
import { GMapInput, GMapField } from '@fusionworks/ra-google-maps-input';

export const ListEntity = props => {
  return (
    <List {...props} >
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <EditButton />
      </Datagrid>
    </List>
  )
};

export const EditEntity = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <GMapInput
        multipleMarkers
        source="coordinates"
        googleKey="<YOUR_GOOGLE_APP_KEY>"
      />
    </SimpleForm>
  </Edit>
);

export const ShowEntity = props => (
  <Show {...props}>
    <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <GMapField
          source="coordinates"
          googleKey="<YOUR_GOOGLE_APP_KEY>"
        />
    </SimpleShowLayout>
  </Show>
)

export const CreateEntity = props => (
  <Create {...props}>
    <SimpleForm>
      <NumberInput source="id" />
      <TextInput source="name" />
      <GMapInput
        multipleMarkers
        source="coordinates"
        googleKey="<YOUR_GOOGLE_APP_KEY>"
      />
    </SimpleForm>
  </Create>
);