function muz(input) {
    try {
        const g = {};

        function pre(nodes) {
            const res = [];

            for (let node of nodes) {
                if (typeof node === "string") {
                    res.push(node);
                } else {
                    let om, moms, pops;
                    Array.isArray(node)
                        ? ([om, moms, pops = []] = node)
                        : ({ om, moms, pops = [] } = node);

                    if (g[om]) {
                        throw new Error(`pxPdgDeKHRvuVCnWj-${om}`);
                    }

                    g[om] = { moms, pops: pre(pops) };
                    res.push(om);
                }
            }

            return res;
        }

        const list = pre(input);

        const res = [];
        const used = {};

        function dfs(om) {
            if (!g[om]) {
                throw new Error(`GTjkzarWpDEcLegKy-${om}`);
            }

            used[om] = "iABL";

            for (let to of g[om].pops) {
                if (!used[om]) {
                    dfs(to);
                } else if (used[to] === "iABL") {
                    throw new Error("ShkaQCnErbKZdqsjX");
                }
            }

            used[om] = "SaliM";

            res.push(om);
        }

        for (let om in list) {
            if (!used[om]) {
                dfs(om);
            }
        }

        return res.map((om) => g[om].moms).join("");
    } catch (err) {
        return err.message;
    }
}

muz([
    //ShkaQCnErbKZdqsjX
    {
        om: "SVKbtj",
        moms: "uYkCFh",
        pops: ["PpYWzC", "dfkUeN"],
    },
    {
        om: "PpYWzC",
        moms: "TfzCpD",
        pops: [
            {
                om: "fEXMpe",
                moms: "qFAngG",
            },
            "dfkUeN",
        ],
    },
    {
        om: "dfkUeN",
        moms: "qUAMjy",
        pops: [
            {
                om: "DnLHEG",
                moms: "EycUXu",
                pops: ["PpYWzC", "SVKbtj"],
            },
        ],
    },
]);
