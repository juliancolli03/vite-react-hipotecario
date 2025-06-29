import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from '../../redux/formSlice';
import {
  FormWrapper,
  FormTitle,
  FormGroup,
  FieldWrapper,
  Label,
  Input,
  SimulateButton,
  RequiredNote
} from './Hero.styles';

export default function FormHero() {
  const dispatch = useDispatch();
  const { nombre, email, codigo, telefono } = useSelector(state => state.form);

  const handleChange = e => {
    dispatch(setFormData({ [e.target.name]: e.target.value }));
  };

  return (
    <FormWrapper className='bg-light rounded-4 p-4'>
      <FormTitle>Simulá tu seguro de salud integral</FormTitle>

      <FormGroup className='d-flex flex-wrap'>
        <FieldWrapper>
          <Label htmlFor="nombre">Nombre *</Label>
          <Input
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="email">E-mail *</Label>
          <Input
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </FieldWrapper>
      </FormGroup>

      <FormGroup>
        <FieldWrapper>
          <Label htmlFor="codigo">Código de área *</Label>
          <Input
            id="codigo"
            name="codigo"
            value={codigo}
            onChange={handleChange}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="telefono">Teléfono *</Label>
          <Input
            id="telefono"
            name="telefono"
            value={telefono}
            onChange={handleChange}
          />
        </FieldWrapper>
      </FormGroup>

      <SimulateButton type="button">Simular</SimulateButton>
      <RequiredNote>*Datos obligatorios</RequiredNote>
    </FormWrapper>
  );
}
