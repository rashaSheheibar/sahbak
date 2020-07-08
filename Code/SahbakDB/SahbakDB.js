import React from 'react';
import { AsyncStorage } from 'react-native';
import * as SQLite from 'expo-sqlite';

export class SahbakDB extends React.Component {
    static myInstance = null; 
    constructor(props){
        super(props)
        this.myInstance = SQLite.openDatabase('sahbakDB.db');
        this.createTable();
    }
    static retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('JWT');
        if (value !== null) {
          // We have data!!
          return value;
        }
      } catch (error) {
        // Error retrieving data
        return null
      }
    };
    static storeData = async (value) => {
      try {
        await AsyncStorage.setItem(
          'JWT',
          value
        );
      } catch (error) {
        // Error saving data
      }
    };
    static getInstance() { if(SahbakDB.myInstance == null){ SahbakDB.myInstance = new SahbakDB(); } return this.myInstance; }
    createTable(){
        //-------------------------------------------------------------
        //  * This function create the tables if not declared 
        //  * This must work in the first run of the application 
        // -------------------------------------------------------------
            //  this.myInstance.transaction(tx => {tx.executeSql('create table if not exists User (id integer primary key not null, FirstName text, LastName text, Email text, Password text,  Token text, Phone text, City text, Gender text);')})
        this.myInstance.transaction(tx => { tx.executeSql('create table if not exists User (id integer primary key not null, FirstName text, LastName text, Email text, Password text, Token text, Phone text, City text, Gender text, Category text, Picture text)')})
        this.myInstance.transaction(tx => {tx.executeSql('create table if not exists UserEducation (id integer primary key not null, EducationInfo text)')})      
        this.myInstance.transaction(tx => {tx.executeSql('create table if not exists FeaturesThatDescribeUser (id integer primary key not null, FeaturesThatDescribeUserInfo text)')})   
        this.myInstance.transaction(tx => {tx.executeSql('create table if not exists UserInterests (id integer primary key not null, UserInterestsInfo text)')}) 
      
      }
      AddUserInterests(UserInterestsInfo){
        return new Promise ((resolve, reject) => this.myInstance.transaction(tx => { 
            tx.executeSql('insert into UserInterests(UserInterestsInfo)values(?)', [UserInterestsInfo]);
          }, function (tx, error) {
            
           reject(error);
        },
          resolve("done!"),
        ));
        
      }

      GetUserInterests(){
        const  query = "SELECT * FROM UserInterests";
        return new Promise((resolve, reject) => this.myInstance.transaction((tx) => {
            tx.executeSql(query, [], (tx, results) => {
                this.totalItems = (results.rows);
                resolve(this.totalItems);          
            }, function (tx, error) {
                reject(error);
            });
        }))

      }
      RemoveUserInterests(InterestsId){
        return new Promise ((resolve, reject) => this.myInstance.transaction(tx => { 
          var sql='DELETE FROM UserInterests WHERE id='+InterestsId
            tx.executeSql(sql);
          }, function (tx, error) {
            reject(error)
          },
            resolve("removed"),
          )
        );
      }

      AddUserFeaturesThatDescribe(FeaturesThatDescribeUserInfo){
        return new Promise ((resolve, reject) => this.myInstance.transaction(tx => { 
            tx.executeSql('insert into FeaturesThatDescribeUser(FeaturesThatDescribeUserInfo)values(?)', [FeaturesThatDescribeUserInfo]);
          }, function (tx, error) {
            
           reject(error);
        },
          resolve("done!"),
        ));
        
      }

      GetUserFeaturesThatDescribe(){
        const  query = "SELECT * FROM FeaturesThatDescribeUser";
        return new Promise((resolve, reject) => this.myInstance.transaction((tx) => {
            tx.executeSql(query, [], (tx, results) => {
                this.totalItems = (results.rows);
                resolve(this.totalItems);          
            }, function (tx, error) {
                reject(error);
            });
        }))

      }

      RemoveFeaturesThatDescribe(FeaturesThatDescribeId){
        return new Promise ((resolve, reject) => this.myInstance.transaction(tx => { 
          var sql='DELETE FROM FeaturesThatDescribeUser WHERE id='+FeaturesThatDescribeId
            tx.executeSql(sql);
          }, function (tx, error) {
            reject(error)
          },
            resolve("removed"),
          )
        );
      }


      AddUserMilitaryRole(MilitaryRoleInfo){
        return new Promise ((resolve, reject) => this.myInstance.transaction(tx => { 
            tx.executeSql('insert into UserMilitaryRole(MilitaryRoleInfo)values(?)', [MilitaryRoleInfo]);
          }, function (tx, error) {
            
           reject(error);
        },
          resolve("done!"),
        ));
        
      }
      RemoveMilitaryRole(MilitaryRoleId){
        return new Promise ((resolve, reject) => this.myInstance.transaction(tx => { 
          var sql='DELETE FROM UserMilitaryRole WHERE id='+MilitaryRoleId
            tx.executeSql(sql);
          }, function (tx, error) {
            reject(error)
          },
            resolve("removed"),
          )
        );
      }
      GetUserMilitaryRole(){
        const  query = "SELECT * FROM UserMilitaryRole";  
      return new Promise((resolve, reject) => this.myInstance.transaction((tx) => {
          tx.executeSql(query, [], (tx, results) => {
              this.totalItems = (results.rows);
              resolve(this.totalItems);          
          }, function (tx, error) {
              reject(error);
          });
      }))

      }

     


      UpdateUserInfoByField(data,textField,UserId){
        console.log(data)
        return new Promise((resolve,reject)=>this.myInstance.transaction(tx => {
          var sql='UPDATE User SET `'+textField+'` = "'+data+'" WHERE id='+UserId
          tx.executeSql(sql);
        }, function (tx, error) {
          reject(error);
       },
          resolve("update!"),
       )
        )
      }
      AddUser(FirstName,LastName,Email,Password,Token,Phone,City,Gender,Category ,Picture){
        this.ClearUserInfo()
        return new Promise ((resolve, reject) => this.myInstance.transaction(tx => { 
            tx.executeSql('insert into User(FirstName,LastName,Email,Password,Token,Phone,City,Gender,Category,Picture)values(?,?,?,?,?,?,?,?,?,?)', [FirstName,LastName,Email,Password,Token,Phone,City,Gender,Category ,Picture ]);
          }, function (tx, error) {
            
           reject(error);
        },
          resolve("done!"),
        ));
        
      }
      RemoveEducation(EducationId){
        return new Promise ((resolve, reject) => this.myInstance.transaction(tx => { 
          var sql='DELETE FROM UserEducation WHERE id='+EducationId
            tx.executeSql(sql);
          }, function (tx, error) {
            reject(error)
          },
            resolve("removed"),
          )
        );
      }
      AddUserEducation(EducationInfo){
        return new Promise ((resolve, reject) => this.myInstance.transaction(tx => { 
            tx.executeSql('insert into UserEducation(EducationInfo)values(?)', [EducationInfo]);
          }, function (tx, error) {
            reject(error);
        },
            resolve("done!"),
        )
        );
       
      }
      GetUserEducation(){
        const  query = "SELECT * FROM UserEducation";  
        return new Promise((resolve, reject) => this.myInstance.transaction((tx) => {
            tx.executeSql(query, [], (tx, results) => {
                this.totalItems = (results.rows);
                resolve(this.totalItems);          
            }, function (tx, error) {
                reject(error);
            });
        }))

      }


      GetUserInfo(){
        const  query = "SELECT * FROM User";  
        return new Promise((resolve, reject) => this.myInstance.transaction((tx) => {
            tx.executeSql(query, [], (tx, results) => {
                this.totalItems = (results.rows);
                resolve(this.totalItems);
            
            }, function (tx, error) {
                reject(error);
            });
        }))

      }
      UpdateUserInfo(FirstName,LastName,Email,Password,Token,Phone,City,Gender,Category,Picture){
        const  query = "SELECT * FROM User";
        this.ClearUserInfo()
        this.myInstance.transaction(tx => { 
            tx.executeSql('UPDATE User SET (FirstName,LastName,Email,Password,Token,Phone,City,Gender,Category,Picture)values(?,?,?,?,?,?,?,?,?,?)', [FirstName,LastName,Email,Password,Token,Phone,City,Gender,Category,Picture]);

        },
        null,
        );
        
      }

      ClearUserInfo(){
        const  query = "DELETE FROM User WHERE 1";  
        return new Promise((resolve, reject) => this.myInstance.transaction((tx) => {
          tx.executeSql(query, [], (tx, results) => {
              this.totalItems = (results.rows);
              resolve(this.totalItems);
              
          
          }, function (tx, error) {
              reject(error);
          });
      }))
      }
      
      DeleteTables(){
        this.ClearUserInfo()
        this.myInstance.transaction(tx => {
          this.myInstance.transaction(tx => {tx.executeSql("DROP TABLE UserInterests;")})

      })
      
    }
}