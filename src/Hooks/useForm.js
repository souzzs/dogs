import React from "react";

// Contém as regex para validar certos tipos de input
const validacao = {
  senha: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    mensagem: "A senha precisa conter pelo menos 8 caracteres ...",
  },
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    mensagem: "Preencha um email válido.",
  },
  numero: {
    regex: /^\d+$/,
    mensagem: "Preencha apenas números.",
  },
};

const useForm = (tipo) => {
  const [valor, setValor] = React.useState("");
  const [erro, setErro] = React.useState(null);

  // CallBack do evento de mudança que valida o texto, caso esteja tudo ok ele seta o valor no estado.
  const onChange = ({ target }) => {
    if (erro) validar(target.value);
    setValor(target.value);
  };

  const onClick = () => {
    setErro(null);
  };

  // É retornado false quando o vaor não esta validado e true quando esta tudo certo ou o elemento não precisa de validação
  const validar = (valor) => {
    const ref = validacao[tipo];

    if (tipo === false) return true;
    if (!valor.length) {
      setErro("Preencha o campo para continuar.");
      return false;
    } else if (ref && !ref.regex.test(valor)) {
      setErro(ref.mensagem);
      return false;
    } else {
      if (tipo === "numero") {
        if (!(+valor > 0)) {
          setErro("Preencha um valor maior que 0");
          return false;
        }
      } else {
        setErro(null);
        return true;
      }
    }
  };

  // A função validarAt executa a função de validar sem precisar 'sujar' a sintaxe
  return {
    valor,
    setValor,
    onChange,
    onClick,
    validarAt: () => validar(valor),
    erro,
  };
};

export default useForm;
