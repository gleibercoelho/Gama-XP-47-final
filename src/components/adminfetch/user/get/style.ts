import styled from "styled-components";

export const UsersTable = styled.div`
margin: 30px;

table {
            width: 90vw;
            border-collapse: collapse;
            margin-bottom: 1rem;
            color: black;
            background-color: grey;
            
            th, td {
              border: 1px solid #ddd;
              padding: 0.5rem;
              text-align: center;
              
            }
            
            th {
              background-color: grey;
              color: #fff;
              background-color: black;
              position: sticky;
              top: 0;
            }
            
            tbody tr:nth-child(even) {
              background-color: #f2f2f2;
            }
            
            img {
              max-width: 80px;
              height: auto;
            }
            
            table {
              width: 100%;
              margin-bottom: 0;
              background-color: grey;
              
              th, td {
                border: none;
                padding: 10px;
                text-align: center;
              }
              
              th {
                font-weight: bold;
              }
              
              td {
                img {
                  max-width: 50px;
                }
              }
            }
          }
          `