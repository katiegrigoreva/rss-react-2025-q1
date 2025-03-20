export type CountryData = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    nativeName: {
      eng: {
        official: string;
        common: string;
      };
    };
    official: string;
  };
  population: number;
  region: string;
};

class ApiConnector {
  getData = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Cannot fetch ${url}. Status: ${res.status}`);
    }
    return await res.json();
  };
}

export default ApiConnector;
