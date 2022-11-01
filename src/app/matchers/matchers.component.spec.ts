import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Başlangıç

  it('two plus two is four', () =>{
    expect(2+2).toBe(4);
  })

  it('Object Values', () =>{
    //Objeleri test etmek için toEqual kullanılır, toBe kullanamayız.
    const data = {name: "Etiya"};
    expect(data).toEqual({name: "Etiya"});
  })

   //Truthiness
  it('two plus two is four', () =>{
    const n = null ; //null bir falsy değerdir.
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  })

  it('two plus two is four', () =>{
    const z = 0 ; //0 bir falsy değerdir.
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  })


  //Numbers
  it('two plus two is four', () =>{
    
    const value = 2+2 ; 
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    //toBe ve toEqual number lar için kullanılabilir
    expect(value).toBe(4);
    expect(value).toEqual(4);
  })

  it('adding floating point numbers', () =>{
    const value = 3.5 + 0.2; 
    //expect(value).toBe(0.3) //Bu çalışmaz-yuvarlama hatası
    expect(value).toBeCloseTo(3.7); //Bu çalışır
  })

  //Strings

  it('there is no K in Etiya', () =>{
    expect('Etiya').not.toMatch(/K/);
  })

  it('but there is a iy in Etiya', () =>{
    expect('Etiya').toMatch(/iy/);
  })

  //Arrays and iterables

  it('the shopping list has milk on it',()=>{
    const shoppingList = [
      'çöp kutusu',
      'kalem tıraş',
      'silgi',
      'milk'
    ];

    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  })

  //Exceptions

  it('compiling android goes as expected',()=>{
      expect(()=>component.compileAndroidCode()).toThrow();
      expect(()=>component.compileAndroidCode()).toThrow(Error);

      //Fırlatılan hatanın error mesajını veya regexp 'ini test etme
      expect(()=>component.compileAndroidCode()).toThrow('Bu bir hata mesajıdır.');
      expect(()=>component.compileAndroidCode()).toThrow(/hata/);


  })
});
