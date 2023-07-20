import React from "react";
import './Got.css'

function Got(){
    return(
        <div class='con'>
            <div class='heading'>
                <div class='title'>
                    <h1>Game of Thrones Character</h1>
                </div>
            </div>
        <div class='row'>
            <div class='col-6'>
                <div class='list'>
                    <div class='sub'>
                        <h5>Character List</h5>
                    </div>
                <table class="table table-hover">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                                                </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </table>
                </div>
            </div>
            <div class='col-6'>
                <div class='sin'>
                    <div class='detail'>
                        <h5>Character Detail</h5>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Got