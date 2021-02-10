//file contains methods for fetching and posting data to API
import qs from 'qs';
import { Linking } from 'react-native';
import { EditDataOnAPI } from './ApiConnection';

export async function SendEmail(clientEmail, emailSubject, emailBody, options = {}) {
    const { cc, bcc } = options;

    let url = `mailto:${clientEmail}`;

    // Create email link query
    const query = qs.stringify({
        subject: emailSubject,
        body: emailBody,
        cc: cc,
        bcc: bcc
    });

    if (query.length) {
        url += `?${query}`;
    }

    // check if we can use this link
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
}