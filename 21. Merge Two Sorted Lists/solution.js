/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    // if both lists are empty then merged list is also empty
    // if one of the lists is empty then other is the merged list
    if (!list1) {
        return list2;
    } else if (!list2) {
        return list1;
    }

    let mergedHead = null;
    if (list1.val <= list2.val) {
        mergedHead = list1;
        list1 = list1.next;
    } else {
        mergedHead = list2;
        list2 = list2.next;
    }

    let mergedTail = mergedHead;

    while (list1 && list2) {
        let temp = null;
        if (list1.val <= list2.val) {
            temp = list1;
            list1 = list1.next;
        } else {
            temp = list2;
            list2 = list2.next;
        }
        mergedTail.next = temp;
        mergedTail = temp;
    }

    if (list1) {
        mergedTail.next = list1;
    } else if (list2) {
        mergedTail.next = list2;
    }

    return mergedHead;
};