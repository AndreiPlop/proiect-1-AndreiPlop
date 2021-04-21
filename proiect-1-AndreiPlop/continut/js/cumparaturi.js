class Produs
{
  constructor(id,nume,cantitate)
  {
      this.id=id;
      this.nume=nume;
      this.cantitate=cantitate;
  }
}

function adauga_prod(nume_produs, cantitate_produs)
{
    let produse=localStorage.getItem('produse');
    if(produse==null)
    {
        produse=[];
    }
    else
    {
        produse=JSON.parse(produse);
    }
    
    produse=produse.map(p=>new Produs(p.id,p.nume,p.cantitate));

    let Idurmator=localStorage.getItem('idUrmator');
    if(Idurmator==null)
    {
        Idurmator=1;
    }
    else
    {
        Idurmator=JSON.parse(Idurmator);
    }
    let id=Idurmator;
    produse.push(new Produs(id,nume_produs,cantitate_produs));
    localStorage.setItem('produse',JSON.stringify(produse));
    localStorage.setItem('Idurmator',JSON.stringify(id+1));
    alert(JSON.stringify(produse));
    }
