function formatName (user) {
return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName:'Heris',
    lastName:'Janis'
};

const element = (
    <h1>
        Hallo Apakabar {formatName(user)}!
    </h1>
);

function Tiga() {
    return (
        element
    );
}

export default Tiga;