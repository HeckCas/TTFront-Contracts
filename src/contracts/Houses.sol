pragma solidity >=0.5.0 <0.6.0;
pragma experimental ABIEncoderV2;


contract Houses {
    constructor() public {}
    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct House {
        string direccion;
        string propietario;
        address wallet;
    }

    // struct House {
    //     string propietario;
    //     address walletPropietario;
    //     string curp;
    //     string fecha;
    //     string escritura;
    //     string notaria;
    //     address walletNotario;
    //     string solicitud;
    //     string ubicacion;
    //     string calle;
    //     string exterior;
    //     string interior;
    //     string colonia;
    //     string estado;
    //     string municipio;
    //     string cp;
    // }

    House[] public houses;
    mapping (uint => address) public houseToOwner;

    function createHouse(string memory _direccion, string memory _propietario, address _wallet) public {
        uint id = houses.push(House(_direccion, _propietario, _wallet)) - 1;
        houseToOwner[id] = _wallet;
    }
    // function createHouse(
    //     string memory _propietario,
    //     address _walletPropietario,
    //     string memory _curp,
    //     string memory _fecha,
    //     string memory _escritura,
    //     string memory _notaria,
    //     address _walletNotario,
    //     string memory _solicitud,
    //     string memory _ubicacion,
    //     string memory _calle,
    //     string memory _exterior,
    //     string memory _interior,
    //     string memory _colonia,
    //     string memory _estado,
    //     string memory _municipio,
    //     string memory _cp
    // ) public {
    //     uint id = houses.push(House(
    //     _propietario,
    //     _walletPropietario,
    //     _curp,
    //     _fecha,
    //     _escritura,
    //     _notaria,
    //     _walletNotario,
    //     _solicitud,
    //     _ubicacion,
    //     _calle,
    //     _exterior,
    //     _interior,
    //     _colonia,
    //     _estado,
    //     _municipio,
    //     _cp)) - 1;
    //     houseToOwner[id] = _walletPropietario;
    // }
    // function _generateRandomDna(string memory _str) private view returns (uint) {
    //     uint rand = uint(keccak256(abi.encodePacked(_str)));
    //     return rand % dnaModulus;
    // }
    function getAll() public view returns(House[] memory) {
        return houses;
    }
}