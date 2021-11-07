import './address.module.scss'
import Input from '../../lib/input/input'
import Panel from '../../lib/panel/panel'

export interface AddressDTO {
  address: string,
  additionalAddress: string,
  postalCode: string,
  city: string
}

export const DEFAULT_ADDRESS: AddressDTO = {
  address: '',
  additionalAddress: '',
  postalCode: '',
  city: ''
}
/* eslint-disable-next-line */
export interface AddressProps {
  address: AddressDTO,
  onChange : (address: AddressDTO) => void
}

export function Address ({ address, onChange }: AddressProps) {
  const handleChange = (value: string, name: string) => {
    onChange({
      ...address,
      [name]: value
    })
  }

  return (
   <Panel label="Adress">
      <Input
        data-cy="user-address-input"
        label="Address"
        name="address"
        placeholder="297 Elizabeth St"
        value={address.address}
        onChange={handleChange} />

      <Input
        label="Additional adress (optional)"
        data-cy="user-additional-address-input"
        name="additionalAddress"
        placeholder="1st floor"
        value={address.additionalAddress}
        onChange={handleChange} />

      <Input
        label="Postal code"
        data-cy="user-postal-code-input"
        name="postalCode"
        placeholder="10012"
        value={address.postalCode}
        onChange={handleChange} />

      <Input
        label="City"
        data-cy="user-city-input"
        name="city"
        placeholder="New York"
        value={address.city}
        onChange={handleChange} />
    </Panel>
  )
}

export default Address
