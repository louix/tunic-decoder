import type { JSX } from "preact/jsx-runtime"

export const mkVowelSvgData = () => [
    {
        id: 1,
        d: "m 6.8791668,1.322917 5.2916712,3.96875",
        selected: false
    },
    {
        id: 2,
        d: "M 1.5874999,5.291667 6.8791668,1.322917",
        selected: false
    },
    {
        id: 3,
        d: "M 1.5874999,5.291667 V 15.874998",
        selected: false
    },
    {
        id: 4,
        d: "m 1.5874999,15.874998 5.2916669,3.96875",
        selected: false
    },
    {
        id: 5,
        d: "m 6.8791668,19.843748 5.2916712,-3.96875",
        selected: false
    }
]

export const mkConsonantSvgData = () => [
    {
        id: 1,
        d: "M 2.9104168,5.291667 6.8791668,7.9375",
        selected: false
    },
    {
        id: 2,
        d: "M 6.8791668,2.645834 V 7.9375",
        selected: false
    },
    {
        id: 3,
        d: "M 10.847918,5.291667 6.8791668,7.9375",
        selected: false
    },
    {
        id: 4,
        d: "m 6.8791668,11.90625 -3.96875,2.645838",
        selected: false
    },
    {
        id: 5,
        d: "m 6.8791668,11.90625 v 5.291668",
        selected: false
    },
    {
        id: 6,
        d: "m 6.8791668,11.90625 3.9687512,2.645838",
        selected: false
    },
    {
        id: 0,
        d: "",
        selected: false
    },
]



export const vowels: Record<string, JSX.Element> = {
    "1": <abbr title='"y" in "by"'>ī</abbr>,
    "2": <abbr title='"a" in "fable"'>ā</abbr>,
    "4": <abbr title='"oy" in "toy"'>ȯi</abbr>,
    "5": <abbr title='"ou" in "found"'>au</abbr>,
    "12": <abbr title='"u" in "run"'>ə</abbr>,
    "23": <abbr title='"o" in "frog"'>ä</abbr>,
    "34": <abbr title='"oo" in "book"'>u</abbr>,
    "45": <abbr title='"i" in "forbidden"'>i</abbr>,
    "35": <abbr title='"are" in "share"'>er</abbr>,
    "123": <abbr title='"a" in "magic"'>a</abbr>,
    "345": <abbr title='"e" in "bell"'>e</abbr>,
    "235": <abbr title='"ear" in "nearby"'>ir</abbr>,
    "1234": <abbr title='"o" in "do"'>ü</abbr>,
    "1345": <abbr title='"er" in "understood"'>ər</abbr>,
    "1245": <abbr title='"ar" in "dark"'>är</abbr>,
    "1235": <abbr title='"oor" in "door"'>ȯ</abbr>,
    "2345": <abbr title='"ea" in "mean"'>ē</abbr>,
    "12345": <abbr title='"o" in "no"'>ō</abbr>,
}

export const consonants: Record<string, JSX.Element> = {
    "13": <abbr title='"w" in "wind'>w</abbr>,
    "26": <abbr title='"b" in "beach"'>b</abbr>,
    "46": <abbr title='"m" in "mantle"'>m</abbr>,
    "24": <abbr title='"j" in "just'>j</abbr>,
    "25": <abbr title='"l" in "look"'>l</abbr>,
    "35": <abbr title='"p" in "prize"'>p</abbr>,
    "15": <abbr title='"ch" in "chive'>ch</abbr>,
    "135": <abbr title='"t" in "table"'>t</abbr>,
    "126": <abbr title='"v" in "viscous"'>v</abbr>,
    "246": <abbr title='"d" in "drive"'>d</abbr>,
    "236": <abbr title='"k" in "kale"'>k</abbr>,
    "235": <abbr title='"r" in "rabbit"'>r</abbr>,
    "256": <abbr title='"h" in "house"'>h</abbr>,
    "125": <abbr title='"y" in "you"'>y</abbr>,
    "356": <abbr title='"g" in "grave"'>g</abbr>,
    "146": <abbr title='"n" in "found"'>n</abbr>,
    "345": <abbr title='"f" in "face"'>f</abbr>,
    "1256": <abbr title='"s" in "controls"'>z</abbr>,
    "2345": <abbr title='"ss" in "press"'>s</abbr>,
    "1345": <abbr title='"th" in "death"'>th</abbr>,
    "2456": <abbr title='"th" in "there"'>t͟h</abbr>,
    "12346": <abbr title='"s" in "visions"'>zh</abbr>,
    "13456": <abbr title='"sh" in "wish"'>sh</abbr>,
    "123456": <abbr title='"ng" in "strength"'>ng</abbr>,
}
