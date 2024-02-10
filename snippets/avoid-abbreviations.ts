type Addr = {
  num: number;
  name: string;
};

const addrStr = '123 Test St'; // User input

const prsAddr = (a: string): Addr => {};

const addr = prsAddr(addrStr);

type Address = {
  streetNumber: number;
  streetName: string;
};

const userAddressInput = '123 Test St'; // User input

const parseAddressFromInput = (input: string): Address => {};

const parsedAddress = parseAddressFromInput(addressString);
