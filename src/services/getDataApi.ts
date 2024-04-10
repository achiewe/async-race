const baseURL = 'http://127.0.0.1:3000';

const garageURL = `${baseURL}/garage`;
const winnersURL = `${baseURL}/winners`;
const engineURL = `${baseURL}/engine`;

export async function getCars(page?: number, limit?: number) {
    const url = `${garageURL}?_page=${page}&_limit=${limit}`;

    return fetch(url).then(async (res) => {
        const allCars = Number(res.headers.get('X-Total-Count'));
        const carsOnPageX = await res.json();
        return { allCars, carsOnPageX };
    });
}

export async function getCar(id: number) {
    return fetch(`${garageURL}/${id}`)
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error(res.statusText);
        })
        .catch((err) => err);
}

export async function createCar(name: string, color: string) {
    const options = {
        method: 'POST',
        body: JSON.stringify({ name, color }),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return (await fetch(garageURL, options)).json();
}

export async function deleteCar(id: number) {
    const options = {
        method: 'DELETE',
    };

    return fetch(`${garageURL}/${id}`, options)
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error(res.statusText);
        })
        .catch((err) => err);
}

export async function updateCar(name: string, color: string, id: number) {
    const options = {
        method: 'PUT',
        body: JSON.stringify({ name, color }),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return fetch(`${garageURL}/${id}`, options)
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error(res.statusText);
        })
        .catch((err) => err);
}

export async function startEngine(id: number) {
    const url = `${engineURL}?id=${id}&status=started`;
    const options = {
        method: 'PATCH',
    };

    return fetch(url, options)
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error(res.statusText);
        })
        .catch((err) => err);
}

export async function stopEngine(id: number) {
    const url = `${engineURL}?id=${id}&status=stopped`;
    const options = {
        method: 'PATCH',
    };

    return fetch(url, options)
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error(res.statusText);
        })
        .catch((err) => err);
}

export async function drive(id: number) {
    const url = `${engineURL}?id=${id}&status=drive`;
    const options = {
        method: 'PATCH',
    };

    return fetch(url, options)
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error(res.statusText);
        })
        .then((res) => res)
        .catch((err) => err);
}

export async function getWinners(page?: number, limit?: number, sort?: string, order?: string) {
    const mainURL = new URL(`${winnersURL}`);
    const propsUrl = new URLSearchParams({
        _page: `${page || ''}`,
        _limit: `${limit || ''}`,
        _sort: `${sort || ''}`,
        _order: `${order || ''}`,
    });
    mainURL.search = propsUrl.toString();

    return fetch(mainURL).then(async (res) => {
        const winnersX = Number(res.headers.get('X-Total-Count'));
        const winnersOnPage = await res.json();
        return { winnersX, winnersOnPage };
    });
}

export async function getWinner(id: number) {
    return fetch(`${winnersURL}/${id}`)
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error(res.statusText);
        })
        .catch((err) => err);
}

export async function createWinner(id: number, wins: number, time: number) {
    const options = {
        method: 'POST',
        body: JSON.stringify({ id, wins, time }),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return fetch(winnersURL, options)
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error(res.statusText);
        })
        .catch((err) => err);
}

export async function deleteWinner(id: number) {
    const options = {
        method: 'DELETE',
    };

    return fetch(`${winnersURL}/${id}`, options)
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error(res.statusText);
        })
        .catch((err) => err);
}

export async function updateWinner(id: number, wins: number, time: number) {
    const options = {
        method: 'PUT',
        body: JSON.stringify({ wins, time }),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return fetch(`${winnersURL}/${id}`, options)
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error(res.statusText);
        })
        .catch((err) => err);
}
