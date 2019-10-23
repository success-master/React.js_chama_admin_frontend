import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import { darken } from '@material-ui/core/styles/colorManipulator';
import { FuseAnimate } from '@fuse';
import { withRouter } from 'react-router-dom';
import BlogOverview from './component/BlogOverview';
// import * as Actions from '../users/store/actions';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import api from 'app/ApiConfig.js';

const styles = theme => ({
    root: {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + darken(theme.palette.primary.dark, 0.5) + ' 100%)',
        color: theme.palette.primary.contrastText
    }
});

class DashboardApp extends Component {


    state = {
        totalUsers: 0,
        allcontributions: 0,
        outstanding: 0,
        repaid_loan: 0,
    };
    async  componentDidMount() {
        //api call

        // var chama_code = null;
        // var user_id = null;      
        api.post('users/getAllUsers', {}).then((res) => {
            var totalUsers = res.data.doc.length
            this.setState({ totalUsers })
            console.log('totalUsers', totalUsers);
        })
        api.post('transactions/getAllContributions', {}).then((res) => {
            var allcontributions = res.data.doc;
            console.log('allcontributions', allcontributions);
            this.setState({ allcontributions });
        })
        api.post('transactions/getOutstandingTransactions', {}).then((res) => {
            var outstanding = res.data.doc;
            console.log('outstanding', outstanding);
            this.setState({ outstanding });
        })
        api.post('transactions/repaid_loan', {}).then((res) => {
            var repaid_loan = res.data.doc;
            console.log('RepaidLoans', repaid_loan);
            this.setState({ repaid_loan });
        })

    }


    render() {
        var { totalUsers, allcontributions, outstanding, repaid_loan } = this.state
        var smallStats = [
            {
                label: "Total Users",
                value: totalUsers,
                percentage: "person",
                increase: true,
                chartLabels: [null, null, null, null, null, null, null],
                attrs: { md: "6", sm: "6" },
                datasets: [
                    {
                        label: "Today",
                        fill: "start",
                        borderWidth: 1.5,
                        backgroundColor: "rgba(0, 184, 216, 0.1)",
                        borderColor: "rgb(0, 184, 216)",
                        data: [1, 2, 1, 3, 5, 4, 7]
                    }
                ]
            },
            {
                label: "All Contributions",
                value: allcontributions,
                percentage: "KES",
                increase: true,
                chartLabels: [null, null, null, null, null, null, null],
                attrs: { md: "6", sm: "6" },
                datasets: [
                    {
                        label: "Today",
                        fill: "start",
                        borderWidth: 1.5,
                        backgroundColor: "rgba(23,198,113,0.1)",
                        borderColor: "rgb(23,198,113)",
                        data: [1, 2, 3, 3, 3, 4, 4]
                    }
                ]
            },
            {
                label: "All Outstanding Loans",
                value: outstanding,
                percentage: "KES",
                increase: false,
                decrease: true,
                chartLabels: [null, null, null, null, null, null, null],
                attrs: { md: "4", sm: "6" },
                datasets: [
                    {
                        label: "Today",
                        fill: "start",
                        borderWidth: 1.5,
                        backgroundColor: "rgba(255,180,0,0.1)",
                        borderColor: "rgb(255,180,0)",
                        data: [2, 3, 3, 3, 4, 3, 3]
                    }
                ]
            },
            {
                label: "All Repaid Loans",
                value: repaid_loan,
                percentage: "KES",
                increase: false,
                decrease: true,
                chartLabels: [null, null, null, null, null, null, null],
                attrs: { md: "4", sm: "6" },
                datasets: [
                    {
                        label: "Today",
                        fill: "start",
                        borderWidth: 1.5,
                        backgroundColor: "rgba(255,65,105,0.1)",
                        borderColor: "rgb(255,65,105)",
                        data: [1, 7, 1, 3, 1, 4, 8]
                    }
                ]
            },
            // {
            //     label: "Net Profit",
            //     value: "17,281",
            //     percentage: "KES",
            //     increase: false,
            //     decrease: true,
            //     chartLabels: [null, null, null, null, null, null, null],
            //     attrs: { md: "4", sm: "6" },
            //     datasets: [
            //         {
            //             label: "Today",
            //             fill: "start",
            //             borderWidth: 1.5,
            //             backgroundColor: "rgb(0,123,255,0.1)",
            //             borderColor: "rgb(0,123,255)",
            //             data: [3, 2, 3, 2, 4, 5, 4]
            //         }
            //     ]
            // }
        ]

        return (
            <div>
                <FuseAnimate>
                    {/* <div>Dashboard</div> */}
                    <BlogOverview smallStats={smallStats} />
                </FuseAnimate>
            </div>
        )
    }
}

// function mapDispatchToProps(dispatch)
// {
//     return bindActionCreators({
//         getUsers             : Actions.getUsers,        
//     }, dispatch);
// }

// export default withRouter(connect(mapDispatchToProps)(DashboardApp));

export default withStyles(styles, { withTheme: true })(withRouter(DashboardApp));