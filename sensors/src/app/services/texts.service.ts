import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TextsService {
    common = {

    }
    sensorList = {
        Header: 'רשימת חיישנים',
        Registered: 'התקנים רשומים',
        DeviceProper: 'תקין',
        DevicesProper: 'תקינים',
        DeviceError: 'בתקלה'
    }
    sensorData = {
        InstallDate: 'צימוד',
        LastReportDate: 'דיווח אחרון',
        ReceptionLevel: 'עוצמת אות',
        ConnectionType: 'סוג חיבור',
        MAC: 'MAC',
        ReceptionLevel_High: 'טובה',
        ReceptionLevel_Medium: 'בינונית',
        ReceptionLevel_Low: 'נמוכה'
    }
}