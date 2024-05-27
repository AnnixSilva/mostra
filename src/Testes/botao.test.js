import { fireEvent, render } from '@testing-library/react';
import FormularioCadastro from '../JS/cadastre';

test('renderiza o botão corretamente e dispara o alerta', () => {
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

  const { getByText } = render(<FormularioCadastro />);
  const botao = getByText(/Cadastrar/i);

  fireEvent.click(botao);

  expect(alertMock).toHaveBeenCalledWith('Você clicou no botão!');

  alertMock.mockRestore();
});