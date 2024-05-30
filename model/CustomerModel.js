export class CustomerModel {
 constructor(id, name, address, mobile) {
  this._id = id;
  this._name = name;
  this._address = address;
  this._mobile = mobile;
 }

 get id() {
  return this._id;
 }

 set id(_id) {
  this._id = id;
 }

 get name() {
  return this._name;
 }

 set name(_name) {
  this._name = name;
 }

 get address() {
  return this._address;
 }

 set address(_address) {
  this._address = address;
 }

 get mobile() {
  return this._mobile;
 }

 set mobile(mobile) {
  this._mobile = mobile;
 }

 toString() {
  return 'id :' + this._id + ' Name : ' + this._name + 'address : ' + this._address + 'mobile : ' + this._mobile
 }

}