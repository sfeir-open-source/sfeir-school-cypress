import Input from '../../lib/input/input';
import Panel from '../../lib/panel/panel';
import './credit-card.module.scss';

/* eslint-disable-next-line */
export interface CreditCardProps {
  creditCard: string;
  onChange: (creditCard: string) => void;
}

export function CreditCard({ creditCard, onChange }: CreditCardProps) {
  return (
    <Panel label="Payment">
      <Input
        label="Credit card"
        data-cy="credit-card-input"
        name="credit-card"
        placeholder="****-****-****-****"
        value={creditCard}
        onChange={onChange}
      />
    </Panel>
  );
}

export default CreditCard;
