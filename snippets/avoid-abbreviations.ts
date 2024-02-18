interface Addr {
  num: number;
  name: string;
};

const addrStrng = '123 Test St'; // User input

const prsAddr = (a: string): Addr => {};

const addr = prsAddr(addrStrng);

interface Address {
  streetNumber: number;
  streetName: string;
};

const addressInput = '123 Test St'; // User input

const parseAddressFromInput = (input: string): Address => {};

const parsedAddress = parseAddressFromInput(addressInput);
