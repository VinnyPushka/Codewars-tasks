let topology = {
    sad: 1,
    qweqw: "asda",
    instances: [
        { instance: { name: "korova", type: "member" } },
        { instance: { name: "zaichik", type: "loh" } },
    ],
};

const members = topology.instances.reduce((acc, { instance }) => {
    if (instance.type === "member") {
        return [...acc, instance];
    }
    return acc;
}, []);

console.log(members);
