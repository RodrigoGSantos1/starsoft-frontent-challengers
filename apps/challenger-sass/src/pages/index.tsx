import { Button, Input } from "@/components";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdBlock } from "react-icons/md";

export default function Home() {
  const [formValues, setFormValues] = useState({
    Input1: '',
    Input2: '',
    InputError: '',
    Input3: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const messageInputError: Record<string, string> = { Input1: 'Identidade Inválida, verifique o número informado' };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};

    if (formValues.InputError === '') {
      newErrors.InputError = 'Campo obrigatório';
    }

    setErrors(newErrors);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1>Challenger Sass</h1>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "80%", marginTop: 30 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", alignItems: "center" }} >
          <h2>Botões</h2>
          <Button
            title="Continuar"
            icon={<FaArrowRightLong />}
          />
          <Button
            title="Continuar"
            icon={<MdBlock />}
            disabled
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 30, marginBottom: 30 }}>
          <Input
            title="CPF"
            placeholder="CPF"
            name="Input1"
            value={formValues.Input1}
            onChange={handleChange}
            errors={messageInputError}
            disabled
          />

          <Input
            title="CPF"
            placeholder="CPF"
            name="Input2"
            value={formValues.Input2}
            onChange={handleChange}
            errors={errors}
            disabled
          />
          <Input
            title="CPF"
            placeholder="CPF"
            name="Input3"
            value={formValues.Input3}
            onChange={handleChange}
            errors={errors}
          />
        </div>


      </div>
      <h1>Teste o conjunto dos elementos</h1>

      <Input
        title="CPF"
        placeholder="CPF"
        name="InputError"
        value={formValues.InputError}
        onChange={handleChange}
        errors={errors}
      />
      <Button title="Enviar" onClick={handleSubmit} />
    </div>
  );
}
