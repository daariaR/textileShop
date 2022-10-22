import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '@app/_models/order';
import { Textil } from '@app/_models/textil';
import { Userr } from '@app/_models/userr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  public register(user: Userr) {
    return this.http.post("http://localhost:8080/addUser", user, {observe: "response"});
  }

  public login(user: Userr){
    return this.http.post("http://localhost:8080/login", user, {observe: "response"});
  }

  public getUserById(id: any) {
    return this.http.get('http://localhost:8080/getById/'+id);
  }

  public getAll() {
    return this.http.get<Userr[]>('http://localhost:8080/getusers');
  }

  public returnUsername(username: any) {
    return this.http.get('http://localhost:8080/findbyusernamereturnid/' + username);
  }


  public editUser(user: Userr) {
    return this.http.post("http://localhost:8080/edit", user, {observe: "response"});
  }

  public getOrderByUserId(id: any) {
    return this.http.get('http://localhost:8080/orderById/'+id);
  }

  public addOrder(order: Order) {
    return this.http.post("http://localhost:8080/addOrder", order, {observe: "response"});
  }

  public getAllOrders() {
    return this.http.get<Order[]>('http://localhost:8080/getorders');
  }

  public deleteOrder(order: Order) {
    return this.http.post("http://localhost:8080/addOrder/", order, {observe: "response"});
  }


  public removeOrder(id: any) {
    return this.http.delete("http://localhost:8080/removeOrder/"+id);
  }

  public getHistory() {
    return this.http.get<History[]>('http://localhost:8080/gethistory');
  }

  public addHistory(his: any) {
    return this.http.post("http://localhost:8080/addhistory", his, {observe: "response"});
  }



  public deleteUser(id: any) {
    return this.http.delete("http://localhost:8080/deleteUser/"+id);
  }



  public averageRating(namep: String): any {
    return this.http.get("http://localhost:8080/averagerating/"+namep);
  }


  
  public addTextil(textil: Textil) {
    return this.http.post("http://localhost:8080/addtextils", textil, {observe: "response"});
  }

  public getAllTextil() {
    return this.http.get<Textil[]>('http://localhost:8080/gettextils');
  }

}
