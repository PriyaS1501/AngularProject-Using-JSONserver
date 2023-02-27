import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  //baseURL="http://localhost:3000/Doctors" old URL
  baseURL = "http://localhost:3000/" //new url
  //tableName="Doctors"

  constructor(private http: HttpClient) { }

  // Get Record
  getRecords(table: string) {
    return this.http.get(this.baseURL + table)
  }
  // get single record
  getRecord(table: string, id: any) {
    const getURL = `${this.baseURL}${table}/${id}`
    return this.http.get(getURL)
  }
  // Delete Record
  deleteRecord(table: string,id: any) {
    const delURL = `${this.baseURL}${table}/${id}`
    return this.http.delete(delURL)
  }
  // add data
  addRecord(table:string, addForm: any) {
    return this.http.post(this.baseURL + table, addForm)
  }

  // edit record
  updateRecord(table: string,docData: any) {
    const putURL = `${this.baseURL}${table}/${docData.id}`
    return this.http.put(putURL, docData)
  }

  //store the user in the sessionstorage
  signIn(user: string) {
    sessionStorage.setItem("user_key", user)
  }

  
  //remove the user from the sessionstorage
  signOut() {
    sessionStorage.removeItem("user_key")
  }



}
