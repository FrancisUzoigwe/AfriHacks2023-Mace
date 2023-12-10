import { iOwnerData } from './../utils/interface';
import { Schema, Types, model } from 'mongoose';


const ownerModel = new Schema<iOwnerData>({
    store: {
        type: Types.ObjectId,
        ref:"stores"
    }
}, {
    timestamps:true
})

export default model<iOwnerData>("owners",ownerModel)