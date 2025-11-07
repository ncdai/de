import alphaSort from 'alpha-sort';

export interface DesignEngineer {
  github?: string;
  name: string;
  website?: string;
  x?: string;
}

export type DesignEngineers = Array<DesignEngineer>;

const designEngineers: DesignEngineers = [
  {
    github: 'https://github.com/raunofreiberg',
    name: 'Rauno Freiberg',
    website: 'https://rauno.me/',
    x: 'https://x.com/raunofreiberg',
  },
  {
    github: 'https://github.com/johnphamous',
    name: 'John Phamous',
    website: 'https://pham.codes/',
    x: 'https://x.com/johnphamous',
  },
  {
    github: 'https://github.com/henryjeff',
    name: 'Henry Heffernan',
    website: 'https://henryheffernan.com/',
    x: 'https://x.com/henryheffernan',
  },
  {
    github: 'https://github.com/MaggieAppleton',
    name: 'Maggie Appleton',
    website: 'https://maggieappleton.com/',
    x: 'https://x.com/Mappletons',
  },
  {
    github: 'https://github.com/danhollick',
    name: 'Dan Hollick',
    x: 'https://x.com/DanHollick',
  },
  {
    github: 'https://github.com/dimitrisraptis96',
    name: 'Jim Raptis',
    website: 'https://www.jimraptis.com/',
    x: 'https://x.com/d__raptis',
  },
  {
    github: 'https://github.com/jh3y',
    name: 'Jhey Tompkins',
    website: 'https://www.jhey.dev/',
    x: 'https://x.com/jh3yy',
  },
  {
    github: 'https://github.com/segunadebayo',
    name: 'Segun Adebayo',
    website: 'https://www.adebayosegun.com/',
    x: 'https://x.com/thesegunadebayo',
  },
  {
    github: 'https://github.com/pugson',
    name: 'pugson',
    website: 'https://wojtek.im/',
    x: 'https://x.com/pugson',
  },
  {
    name: 'James Clements',
    x: 'https://x.com/jamesvclements',
  },
  {
    github: 'https://github.com/flornkm',
    name: 'Florian Kiem',
    website: 'https://floriankiem.com/',
    x: 'https://x.com/flornkm',
  },
  {
    github: 'https://github.com/samuelkraft',
    name: 'Samuel Kraft',
    website: 'https://samuelkraft.com/',
    x: 'https://x.com/samuelkraft',
  },
  {
    github: 'https://github.com/brijr',
    name: 'Bridger Tower',
    website: 'https://brijr.dev/',
    x: 'https://x.com/bridgertower',
  },
  {
    github: 'https://github.com/danilowoz',
    name: 'Danilo Woznica',
    website: 'https://danilowoz.com/',
    x: 'https://x.com/danilowoz',
  },
  {
    github: 'https://github.com/pacocoursey',
    name: 'Paco Coursey',
    website: 'https://paco.me/',
    x: 'https://x.com/pacocoursey',
  },
  {
    github: 'https://github.com/emilkowalski',
    name: 'Emil Kowalski',
    website: 'https://emilkowal.ski/',
    x: 'https://x.com/emilkowalski_',
  },
  {
    github: 'https://github.com/emilwidlund',
    name: 'Emil Widlund',
    x: 'https://x.com/emilwidlund',
  },
  {
    github: 'https://github.com/jimmylee',
    name: 'Jimmy Lee',
    website: 'https://jimmyl.ee/',
    x: 'https://x.com/wwwjim',
  },
  {
    github: 'https://github.com/preetsuthar17',
    name: 'Preet Suthar',
    website: 'https://preetsuthar.me/',
    x: 'https://x.com/preetsuthar17',
  },
  {
    github: 'https://github.com/pqoqubbw',
    name: 'dmytro',
    website: 'https://pqoqubbw.dev/',
    x: 'https://x.com/pqoqubbw',
  },
  {
    github: 'https://github.com/bdrtsky',
    name: 'Serhii Bedrytskyi',
    website: 'https://serhii.be/',
    x: 'https://x.com/serhii_be',
  },
  {
    github: 'https://github.com/aaronmahlke',
    name: 'Aaron Mahlke',
    website: 'https://www.mahlke.design/',
    x: 'https://x.com/aaronmahlke',
  },
];

export const list = designEngineers
  .map(engineer => engineer.name)
  .sort(alphaSort({ caseInsensitive: true }))
  .map(name => designEngineers.find(engineer => engineer.name === name)!);
